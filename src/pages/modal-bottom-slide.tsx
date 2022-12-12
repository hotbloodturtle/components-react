import ModalBottomSlide from "../components/ModalBottomSlide";
import useModal from "../hooks/useModal";

const PageModalBottomSlide = () => {
  const useModalBottomSlide = useModal();
  return (
    <>
      <button onClick={() => useModalBottomSlide.showModal()}>버튼</button>
      <ModalBottomSlide
        title="하단 슬라이드 모달"
        useModal={useModalBottomSlide}
      />
    </>
  );
};

export default PageModalBottomSlide;
