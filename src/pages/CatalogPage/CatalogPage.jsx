import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAdvertisments,
  selectError,
  selectIsLoading,
} from '../../redux/advertisments/advertismentsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { fetchAdvertismentsThunk } from '../../redux/advertisments/advertismentsCarsOperations';
import { advertismentsReset } from '../../redux/advertisments/advertismentsCarsSlice';
import { MutatingDots } from 'react-loader-spinner';

import Filter from 'components/Filter/Filter';
import AdvertismentsList from 'components/AdvertismentsList/AdvertismentsList';
import advertismentsFilter from '../../helpers/advertismentsFilter';

const CatalogPage = () => {
  const advertisments = useSelector(selectAdvertisments);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [filteredData, setFilteredData] = useState(advertisments);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (advertisments.length === 0) {
      dispatch(fetchAdvertismentsThunk(page));
    }
  }, [dispatch, page, advertisments]);

  useEffect(() => {
    setFilteredData(advertismentsFilter(advertisments, filter));
  }, [advertisments, filter]);

  useEffect(() => {
    dispatch(advertismentsReset());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchAdvertismentsThunk(page + 1));
  };

  return (
    <>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#5800a5"
          secondaryColor="#e08e00"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <Filter />
      <AdvertismentsList
        advertisments={filteredData}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default CatalogPage;
