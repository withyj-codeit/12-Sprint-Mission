export type Item = {
  id: number;
  name: string;
  description: string;
  price: number | string; // UI 컴포넌트 step 1, 2 에서 number 로 사용하다가 step 3 에서 string 으로 사용해서 number | string 으로 변경했지만, 실제 프로젝트에서 api에서 받는 데이터와 ui에서 사용하는 데이터 타입이 달라지면 두 개의 타입으로 나누는게 좋아요.
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number | string;
  createdAt: string;
  updatedAt: string;
}
