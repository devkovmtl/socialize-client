const AvatarImage = ({
  src = 'http://www.gravatar.com/avatar?d=mm&s=140',
  alt = 'Profile Picture',
}) => {
  return (
    <img src={src} alt={alt} className='h-16 w-16 object-cover rounded-full' />
  );
};

export default AvatarImage;
