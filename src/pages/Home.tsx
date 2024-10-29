import React from 'react';
import TitleBanner from '../components/TitleBanner';
const Home = () => {
  return (
    <div>
      <TitleBanner
        title="모두의 일기"
        subtitle="누군가의 하루를 함께 느껴보세요"
      />
      {/* 페이지의 다른 내용 */}
    </div>
  );
};

export default Home;
