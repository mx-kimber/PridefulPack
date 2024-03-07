import React from 'react';

export function SocialMediaCategoryIndex(props) {
  return (
    <div className='gap-5px column'>
      Social Media Categories
      {props.socialMediaCategories.map((socialMediaCategory) => (
        <div key={socialMediaCategory.id}>
          <p>Platform: {socialMediaCategory.platform || 'N/A'}</p>
          <p>Platform Logo: {socialMediaCategory.platform_logo || 'N/A'}</p>
        </div>
      ))}
      <img
        className='instagram-icon'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png'
        alt='Instagram Icon'
      />
    </div>
  );
}

export default SocialMediaCategoryIndex;

