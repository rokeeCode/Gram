const pictureTemplate = document
  .querySelector("#picture")
  .content.querySelector("a");

const pictures = document.querySelector(".pictures");

//Render Single image;
const renderPicture = picture => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const pictureImageSrc = pictureElement.querySelector("img");
  const pictureComments = pictureElement.querySelector(".picture__comments");
  const pictureLikes = pictureElement.querySelector(".picture__likes");

  pictureImageSrc.src = picture.url;
  pictureComments.textContent = picture.comments;
  pictureLikes.textContent = picture.likes;

  return pictureElement;
};
// End Render Single Image;

// Show images on main page

const showImages = pictureList => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < pictureList.length; i++) {
    fragment.appendChild(renderPicture(pictureList[i]));
  }
  pictures.appendChild(fragment);
};

showImages(imageList);

// End show images on main page;

// Big picture;

const bigPicture = pictureElement => {
  const bigPicture = document.querySelector(".big-picture");
  bigPicture.classList.remove("hidden");

  const socialElement = document.querySelector(".social");
  const bigPictureImage = bigPicture.querySelector(".big-picture__img img");

  bigPictureImage.src = pictureElement.url; // Show Big Picture;

  //Generate Header;
  const getBigPictureHeader = () => {
    const bigPictureSocialHeaderPicture = document.querySelector(
      ".social__header img"
    );
    const bigPictureSocialHeaderCaption = document.querySelector(
      ".social__header p"
    );
    const bigPictureLikes = bigPicture.querySelector(
      ".social__header .likes-count"
    );

    bigPictureSocialHeaderPicture.src = "img/avatar-1.svg";
    bigPictureLikes.textContent = pictureElement.likes; // take likes from object
    bigPictureSocialHeaderCaption.textContent = pictureElement.comments; //take picture comment from object
  };
  getBigPictureHeader();

  //Hide Picture COunt and Download button;
  const getBigPictureCommentsCountAndDownload = () => {
    const bigPictureCommentsCount = bigPicture.querySelector(
      ".social__comment-count"
    );
    const bigPictureDownloadComments = bigPicture.querySelector(
      ".social__comments-loader"
    );
    bigPictureDownloadComments.classList.add("visually-hidden");
    bigPictureCommentsCount.classList.add("visually-hidden");
    console.log(bigPictureCommentsCount);
  };
  getBigPictureCommentsCountAndDownload();

  //Show Comments;
  const getBigPictureSocialComments = () => {
    const socialComments = document.querySelector(".social__comments");
    socialComments.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      const socialCommentEl = document.createElement("li");
      socialCommentEl.classList.add("social__comment");

      const socialCommentImg = document.createElement("img");
      socialCommentImg.src = `img/avatar-${i + 1}.svg`;
      socialCommentImg.classList.add("social__picture");
      socialCommentImg.width = "35";
      socialCommentImg.height = "35";

      const socialCommentText = document.createElement("p");
      socialCommentText.classList.add("social__text");
      socialCommentText.textContent = COMMENTS[i];

      fragment.appendChild(socialCommentEl);
      socialCommentEl.appendChild(socialCommentImg);
      socialCommentEl.appendChild(socialCommentText);
    }
    socialComments.appendChild(fragment);
  };
  getBigPictureSocialComments();
};

bigPicture(imageList[0]);
//End Big Picture
