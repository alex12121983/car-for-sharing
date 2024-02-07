import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ModalCloseBtn,
  ModalContent,
  ModalWrapper,
  TopContainer,
  Image,
  TextCategory,
  AdvertisementContainer,
  Title,
  ListContainer,
  LeftList,
  LeftListItem,
  RightList,
  RightListItem,
  LinkContact,
  MiddleContentText,
  HightLitedText,
  BottomContainer,
} from './ModalNotice.styled';

// import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
// import Contact from 'components/Contact/Contact';
// import Loader from 'components/LoaderGif/LoaderGif';
import { MdClose } from 'react-icons/md';

// import { getNoticesDetailsAPI } from '../../services/noticesAPI';

const ModalNotice = ({ item, closeModal }) => {
  const [notice, setNotice] = useState(' ');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setIsLoading(true);

  //       const data = await getNoticesDetailsAPI(advertismentDetail);
  //       setNotice(data.notice);
  //     } catch (error) {
  //       console.log('error :>> ', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // }, [advertismentDetail]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const onBackClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <ModalWrapper onClick={onBackClick}>
      <ModalContent onClick={evt => evt.stopPropagation()}>
        <ModalCloseBtn onClick={() => closeModal()}>
          <MdClose />
        </ModalCloseBtn>
        <TopContainer>
          <Image src={item.photoURL}></Image>
          <TextCategory>{item.noticeType}</TextCategory>
          <AdvertisementContainer>
            <Title>{item.title}</Title>
            <ListContainer>
              <LeftList>
                <LeftListItem>Name:</LeftListItem>
                <LeftListItem>Birthday:</LeftListItem>
                <LeftListItem>Type:</LeftListItem>
                <LeftListItem>Place:</LeftListItem>
                <LeftListItem>The sex:</LeftListItem>
                <LeftListItem>Email:</LeftListItem>
                <LeftListItem>Phone:</LeftListItem>
              </LeftList>
              <RightList>
                <RightListItem>{notice.name}</RightListItem>
                <RightListItem>{notice.birthday}</RightListItem>
                <RightListItem>{notice.petType}</RightListItem>
                <RightListItem>{notice.location}</RightListItem>
                <RightListItem>{notice.sex}</RightListItem>
                <RightListItem>
                  <LinkContact as={Link} to={`mailto:${notice.ownerEmail}`}>
                    {notice.ownerEmail}
                  </LinkContact>
                </RightListItem>
                <RightListItem>
                  <LinkContact as={Link} to={`tel:${notice.ownerPhone}`}>
                    {notice.ownerPhone}
                  </LinkContact>
                </RightListItem>
              </RightList>
            </ListContainer>
          </AdvertisementContainer>
        </TopContainer>
        <MiddleContentText>
          <HightLitedText>Comments:</HightLitedText> {notice.comments}
        </MiddleContentText>
        <BottomContainer>
          <AddToFavorite
            notice={notice}
            handleAttentionModal={handleAttentionModal}
          />
          <Contact notice={notice} />
        </BottomContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalNotice;
