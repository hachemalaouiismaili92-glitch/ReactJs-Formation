import './Profile-card.css'


const user = {
  name: 'Mekki skhirat',
  imageUrl: 'https://le12.ma/wp-content/uploads/2020/03/Screenshot_25-2.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}