import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogout, chartDataApi } from '../slices/adminSlice';
import KeywordTable from '../components/KeywordTable';
import CustomChart from '../components/Chart';
import { getAccessToken } from '../utils/token';

function AdminDashboard() {
  const { user } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken=getAccessToken();

  if(!accessToken){
    dispatch(adminLogout());
  }

  const handleLogout = () => {
    dispatch(adminLogout());
    navigate('/');
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      dispatch(chartDataApi());
    }
  }, [navigate, user]);

  const handleGoto = () => {
    navigate('/search');
  };

  return (
<div className="m-5">

  <div className="flex flex-col md:flex-row items-center justify-between h-32 w-full p-4 md:p-8">
    <div className="mb-4 md:mb-0">
      <button
        type="button"
        onClick={handleLogout}
        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        Logout
      </button>
    </div>

    <div>
      <button
        type="button"
        onClick={handleGoto}
        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        Go to Search
      </button>
    </div>
  </div>


  <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
    <div className="md:w-full p-4 mb-4 md:mb-0">
      <KeywordTable />
    </div>
    <div className="md:w-1/3 p-4">
      <CustomChart />
    </div>
  </div>
</div>

  );
}

export default AdminDashboard;
