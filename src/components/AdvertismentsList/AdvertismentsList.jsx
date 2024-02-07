import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoading } from '../../redux/advertisments/advertismentsSelectors';
// import Pagination from '../Pagination/Pagination';

import AdvertismentsListItem from 'components/AdvertismentsListItem/AdvertismentsListItem';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import ModalNotice from 'components/ModalNotice/ModalNotice';
// import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';
// import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
// import { setCategory, setPage } from 'redux/notices/noticesSlices';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import AdvertismentsSkeleton from 'components/AdvertismentsSkeleton/AdvertismentsSkeleton';
import {
  ListAdvertisments,
  NotFoundCarMessage,
} from './AdvertismentsList.styled';
// import {
//   getNoticesThunk,
//   deleteNoticeById,
// } from 'redux/notices/noticesOperations';

const AdvertismentsList = ({ advertisments, handleLoadMore }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({});
  const isLoading = useSelector(selectIsLoading);
  const body = document.querySelector('body');
  const [isActive, setIsActive] = useState(true);

  // const [active, setActive] = useState(false);
  // const [advertismentDetail, setAdvertismentDetail] = useState('');
  // const [activeAttention, setActiveAttention] = useState(false);
  // const [activeDelete, setActiveDelete] = useState(false);
  // const [deleteModalTitle, setDeleteModalTitle] = useState('');

  // const advertisments = useSelector(selectAdvertisments);
  // const query = useSelector(selectQuery);
  // const currentPage = useSelector(selectCurrentPage);
  // const totalNotices = useSelector(selectTotalNotices);
  // const dispatch = useDispatch();
  // const totalPages = Math.ceil(totalNotices / 12);
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!location.pathname.includes(query.category)) {
  //     dispatch(setCategory('sell'));
  //     return;
  //   }
  //   dispatch(getNoticesThunk(query));
  // }, [dispatch, location.pathname, query]);

  // useEffect(() => {
  //   if (!notices.length && query.category !== 'sell') {
  //     Report.info(
  //       'No More Notices',
  //       'There are no more notices in this category. Please explore notices in other categories.',
  //       'Explore',
  //       () => navigate('/notices/sell')
  //     );
  //   }
  // }, [navigate, notices.length, query.category]);

  // const handlePageChange = page => {
  //   dispatch(setPage(page));
  // };

  // const handleLearnMore = advertismentId => {
  //   setAdvertismentDetail(advertismentId);
  //   setActive(true);
  // };

  // const handleAttentionModal = () => {
  //   setActiveAttention(true);
  // };
  useEffect(() => {
    if (advertisments.length > 0 && advertisments.length % 12) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  }, [advertisments.length]);

  const openModal = item => {
    setIsModalOpen(true);
    setCurrentNotice(item);
    disableBodyScroll(body);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    enableBodyScroll(body);
  };
  // const handleDeleteModal = notice => {
  //   setDeleteModalTitle(notice.title);
  //   setNoticeDetail(notice._id);
  //   setActiveDelete(true);
  // };

  // const handleDeleteByIdNotice = async () => {
  //   try {
  //     const {
  //       meta: { requestStatus },
  //       payload,
  //     } = await dispatch(deleteNoticeById({ id: noticeDetail }));

  //     if (requestStatus === 'rejected') {
  //       throw new Error(payload);
  //     }

  //     setActiveDelete(false);
  //   } catch (error) {
  //     const { message } = error;

  //     console.log(message);
  //   }
  // };

  return (
    <>
      <ListAdvertisments>
        {advertisments.length > 0 ? (
          advertisments.map(item => {
            return (
              <AdvertismentsListItem
                key={item.id}
                item={item}
                openModal={openModal}
                // handleLearnMore={() => handleLearnMore(item.id)}
                // handleAttentionModal={handleAttentionModal}
                // handleDeleteModal={() => handleDeleteModal(item)}
              />
            );
          })
        ) : (
          <NotFoundCarMessage>
            No Cars found, reload page or try again later
          </NotFoundCarMessage>
        )}
      </ListAdvertisments>
      {/* {!isLoading && notices.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )} */}
      {isActive && !isLoading ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      ) : null}
      {isModalOpen && (
        <ModalNotice
          closeModal={closeModal}
          item={currentNotice}
          // active={active}
          // setActive={setActive}
          // advertismentDetail={advertismentDetail}
          // handleAttentionModal={handleAttentionModal}
        />
      )}
      {/* <AttentionModal active={activeAttention} setActive={setActiveAttention} /> */}
      {/* <DeleteModal
        active={activeDelete}
        setActive={setActiveDelete}
        yes={handleDeleteByIdNotice}
        title={deleteModalTitle}
      /> */}
    </>
  );
};

export default AdvertismentsList;
