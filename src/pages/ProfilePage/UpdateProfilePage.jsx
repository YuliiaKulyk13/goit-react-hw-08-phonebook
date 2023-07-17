import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/authOperations';

const UpdateProfilePage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(updateAvatar(file));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UpdateProfilePage;
