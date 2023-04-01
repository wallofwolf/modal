import styled from '@emotion/styled';
import { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const modalText = {
    imoji: '👋',
    title: '안녕하세요!',
    nudge: '지원자 박진산입니다.',
    guide: '테마 변경하기를 눌러 테마를 변경할 수 있습니다.',
  };

  return (
    <>
      {isModalOpen === true ? (
        <ModalWrapper>
          <Overlay onClick={handleModalClose} />
          <Content theme={isDarkTheme}>
            <Imoji>{modalText.imoji}</Imoji>
            <Title theme={isDarkTheme}>{modalText.title}</Title>
            <Nudge theme={isDarkTheme}>{modalText.nudge}</Nudge>
            <Guide theme={isDarkTheme}>{modalText.guide}</Guide>
            <CloseBtn
              theme={isDarkTheme}
              onClick={handleModalClose}>
              닫기
            </CloseBtn>
            <ChangeThemeBtn
              theme={isDarkTheme}
              onClick={() => setIsDarkTheme(!isDarkTheme)}>
              테마 변경하기
            </ChangeThemeBtn>
          </Content>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #7c7b7bc5;
`;

const Content = styled.div`
  background-color: ${({ theme }) => (theme === true ? '#1e1e1e' : '#efeeee')};
  position: relative;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  border-radius: 1rem;
  width: 25rem;
  height: 30rem;
`;

const Imoji = styled.div`
  font-size: 2.5rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => (theme === true ? '#f5f5f5' : '#1e1e1e')};
`;

const Nudge = styled.div`
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.5rem;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => (theme === true ? '#feff80' : '#6bdc3b')};
  text-decoration-thickness: 0.2rem;
  text-underline-offset: 0.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => (theme === true ? '#f5f5f5' : '#1e1e1e')};
`;

const Guide = styled.div`
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #a9a9a9;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: ${({ theme }) => (theme === true ? '1px solid #feff80' : '1px solid #6bdc3b')};
  background-color: ${({ theme }) => (theme === true ? '#feff80' : '#6bdc3b')};
  color: ${({ theme }) => (theme === true ? '#1e1e1e' : '#f5f5f5')};
  font-size: 1rem;
  width: 12.5rem;
  height: 2.7rem;
  border-radius: 5px;
`;

const ChangeThemeBtn = styled.button`
  cursor: pointer;
  border: transparent;
  background-color: transparent;
  color: ${({ theme }) => (theme === true ? '#f5f5f5' : '#1e1e1e')};
  font-size: 1rem;
  width: 12.5rem;
  height: 2.7rem;
  border-radius: 5px;
`;
