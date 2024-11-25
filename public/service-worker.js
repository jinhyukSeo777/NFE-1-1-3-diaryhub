/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'diaryhub-cache-v1';
const DYNAMIC_CACHE = 'diaryhub-dynamic-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // 실제 프로젝트의 정적 파일들...
];

// 설치 단계에서 리소스 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// 요청을 가로채서 캐시된 데이터 반환
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          // HTML 요청인 경우 (네비게이션 요청)
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }

          // 다른 리소스들에 대한 처리
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // 오프라인이고 HTML 요청인 경우
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          // 다른 리소스들에 대한 오프라인 폴백
          return new Response('오프라인 상태입니다.');
        });
    })
  );
});

// 새로운 서비스 워커가 활성화될 때 이전 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
