import styled from "styled-components";
import { FC } from "react";

type UseModalProps = {
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

type ModalProps = {
  title: string;
  description?: string;
  useCancel?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  onAfterClose?: () => void;
  useModal: UseModalProps;
};

const ModalBottomSlide: FC<ModalProps> = ({
  title,
  description,
  useCancel = true,
  onOk,
  onCancel,
  onAfterClose,
  useModal,
}) => {
  return (
    <>
      <StyledContainer visible={useModal.visible}>
        <Background
          visible={useModal.visible}
          onClick={() => {
            useModal.hideModal();
            onAfterClose && onAfterClose();
          }}
        />
        <Popup visible={useModal.visible}>
          <TitleRow>
            <h5>{title}</h5>
          </TitleRow>
          <DescriptionRow>
            <p>{description}</p>
          </DescriptionRow>
          <ButtonRow>
            {useCancel && (
              <button
                onClick={() => {
                  useModal.hideModal();
                  onCancel && onCancel();
                  onAfterClose && onAfterClose();
                }}
              >
                취소
              </button>
            )}

            <button
              onClick={() => {
                useModal.hideModal();
                onOk && onOk();
                onAfterClose && onAfterClose();
              }}
            >
              확인
            </button>
          </ButtonRow>
        </Popup>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const Background = styled.div<{ visible: boolean }>`
  z-index: 100;
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${({ visible }) =>
    visible ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  transition: background-color 0.3s ease;
`;

const Popup = styled.div<{ visible: boolean }>`
  background-color: #ffffff;
  z-index: 101;
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  max-height: 90vh;
  border-radius: 20px 20px 0 0;
  animation: ${({ visible }) =>
    visible ? `0.3s forwards slideIn` : `0.2s ease forwards slideOut`};

  @keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const TitleRow = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionRow = styled.div`
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonRow = styled.div`
  margin: 0 auto 10px auto;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4px;

  button {
    width: 45%;
    height: 50px;
    border: none;
    background-color: steelblue;
    color: #ffffff;
    border-radius: 10px;
  }
`;

export default ModalBottomSlide;
