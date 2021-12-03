import React, { useEffect, useState } from 'react';
import './Assessment.css';



const Assessment = () => {

    let imgDataReader = new FileReader();

    const [imgDataP, setImgP] = useState(false);
    const [imgDataB, setImgB] = useState(false);
    const [profileImage, setProfileImage] = useState();
    const [bannerImage, setBannerImage] = useState();

    const onFileChange = (e) => {
        if (e.target && e.target.files[0]) {
            imgDataReader.addEventListener('load', () => {
                localStorage.setItem('profile', imgDataReader.result);
            })
            imgDataReader.readAsDataURL(e.target.files[0]);

            setImgP(true);
        };
    };

    const onBannerChange = (e) => {
        if (e.target && e.target.files[0]) {
            imgDataReader.addEventListener('load', () => {
                localStorage.setItem('banner', imgDataReader.result);
            })
            imgDataReader.readAsDataURL(e.target.files[0]);

            setImgB(true);
        };
    };

    const onFileSaveProfile = () => {
        const pImage = localStorage.getItem('profile');
        if (pImage) {
            setProfileImage(pImage);
            setImgP(false);
        }
    }

    const onFileSaveBanner = () => {
        const bImage = localStorage.getItem('banner');
        if (bImage) {
            setBannerImage(bImage);
        }
        setImgB(false);
    }

    useEffect(() => {
        onFileSaveProfile();
        onFileSaveProfile();
    }, [])


    return (
        <>
            <div className="main__container">

                <div className="main__container-profile">
                    <img className="main__container-profile-img" src={profileImage} alt="" />
                    {
                        imgDataP ? <>
                            <label for="profile" className="main__container-profile-btn">Save</label>
                            <input type="button" id="profile" style={{ visibility: 'hidden', position: 'absolute' }} onClick={onFileSaveProfile} /> </>
                            : <>
                                <label for="profile" className="main__container-profile-btn">Edit</label>
                                <input type="file" id="profile" style={{ visibility: 'hidden', position: 'absolute' }} onChange={onFileChange} />
                            </>

                    }

                </div>
                <div className="main__container-banner">
                    <img className="main__container-banner-img" src={bannerImage} alt="" />
                    {
                        imgDataB ? <>
                            <label for="banner" className="main__container-banner-btn">Save</label>
                            <input type="button" id="banner" style={{ visibility: 'hidden', position: 'absolute' }} onClick={onFileSaveBanner} /></>
                            : <>
                                <label for="banner" className="main__container-banner-btn">Edit</label>
                                <input type="file" id="banner" style={{ visibility: 'hidden', position: 'absolute' }} onChange={onBannerChange} />
                            </>
                    }

                </div>
            </div>

        </>
    )
}

export default Assessment;
