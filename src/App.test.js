import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
import AddCar from './components/AddCar';

test('open add car modal form', async () => {
  render(<App />);
  //차 추가하기 버튼을 클릭했을 때
  fireEvent.click(screen.getByText('차 추가하기'));

  //dialog 요소 내부에 New Car 텍스트가 렌더링되었는지 확인
  expect(screen.getByRole('dialog')).toHaveTextContent('New Car');
});


test('renders a snapshot', () => {
  //Add 컴포넌트 스냅샷 생성 후 이전 스냅샷과 비교
  const tree = TestRenderer.create(<AddCar />).toJSON();
  expect(tree).toMatchSnapshot();
});