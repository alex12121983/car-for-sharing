import {
  ImageBlock,
  Image,
  TextDiv,
  Text,
  Item,
  LearnMore,
  TextMore,
  LearnMoreDiv,
  InGoodHands,
  Favorite,
  InfoLocation,
  InfoAge,
  InfoPol,
  InfoText,
  Remove,
  CategoryLable,
} from './AdvertismentsListItem.styled';
// import { useAuth } from '../../hooks/useAuth.js';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelector';
import {
  setFavorite,
  deleteFromFavorites,
} from '../../redux/favorites/favoritesSlice';
import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
  RemoveIcon,
} from './SvgIcons.jsx';
// import formatCategoryName from 'helpers/formatCategoryName.js';

const AdvertismentsListItem = ({ item, openModal }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(favorites.includes(item.id));

  const toggleFavorite = () => {
    if (favorites.includes(item.id)) {
      dispatch(deleteFromFavorites(item.id));
      setIsFavorite(false);
    } else {
      dispatch(setFavorite(item.id));
      setIsFavorite(true);
    }
  };
  // const { isLoggedIn, user } = useAuth();
  // const [favorites, setFavorites] = useState(user.favorites || []);
  // const [isFavoriteNotice, setIsFavoriteNotice] = useState(() =>
  //   favorites.some(favorite => favorite === notice._id)
  // );
  // const [isFavoriteButtonDisabled, setIsFavoriteButtonDisabled] =
  //   useState(false);

  // const toggleFavorite = async noticeId => {
  //   try {
  //     setIsFavoriteButtonDisabled(true);

  //     if (favorites.includes(noticeId)) {
  //       setIsFavoriteNotice(false);

  //       const {
  //         meta: { requestStatus },
  //         payload,
  //       } = await dispatch(deleteNoticeFromFavorite({ id: noticeId }));

  //       if (requestStatus === 'rejected') {
  //         setIsFavoriteNotice(true);

  //         setIsFavoriteButtonDisabled(false);

  //         throw new Error(payload);
  //       }

  //       setFavorites(prevFavorites =>
  //         prevFavorites.filter(favorite => favorite !== noticeId)
  //       );

  //       setIsFavoriteButtonDisabled(false);

  //       return;
  //     }

  //     setIsFavoriteNotice(true);

  //     const {
  //       meta: { requestStatus },
  //       payload,
  //     } = await dispatch(addNoticeToFavorite({ id: noticeId }));

  //     if (requestStatus === 'rejected') {
  //       setIsFavoriteNotice(false);

  //       setIsFavoriteButtonDisabled(false);

  //       throw new Error(payload);
  //     }

  //     setFavorites(prevFavorites => [...prevFavorites, noticeId]);

  //     setIsFavoriteButtonDisabled(false);

  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Item key={item.id}>
        <ImageBlock>
          <InGoodHands>
            {/* <CategoryLable>
              {formatCategoryName(notice.noticeType)}
            </CategoryLable> */}
          </InGoodHands>
          <Favorite onClick={toggleFavorite}>
            <FavoriteIcon isFavorite={isFavorite} />
          </Favorite>
          <InfoLocation>
            <LocationIcon />
            <InfoText>{notice.location}</InfoText>
          </InfoLocation>
          <InfoAge>
            <AgeIcon></AgeIcon>
            <InfoText>{notice.age} year</InfoText>
          </InfoAge>
          <InfoPol>
            {notice.sex === 'male' ? (
              <MaleIcon></MaleIcon>
            ) : notice.sex === 'female' ? (
              <FemaleIcon></FemaleIcon>
            ) : null}
            <InfoText>{notice.sex}</InfoText>
          </InfoPol>
          <Image src={notice.photoURL} alt={notice.title} />
        </ImageBlock>
        <TextDiv>
          <Text>{notice.title}</Text>
        </TextDiv>
        <LearnMoreDiv>
          <LearnMore onClick={() => openModal(item)}>
            <TextMore>Learn more</TextMore>
            <PetIcon />
          </LearnMore>
        </LearnMoreDiv>
      </Item>
    </>
  );
};

export default AdvertismentsListItem;
