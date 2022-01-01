import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Olipliche Paka Mavoungou",
      title: "Full-Stack Web Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFHnfsZjxq7kg/profile-displayphoto-shrink_200_200/0/1635046570825?e=1646265600&v=beta&t=orWBagvNvGCdWjuDi-mVWv1EKteiV7Ahx_BE7LxR03Y",
      icon: "assets/social/twitter.png",
      logo:"https://media-exp1.licdn.com/dms/image/C560BAQHr8P7gQ95yCQ/company-logo_200_200/0/1578673850004?e=1649289600&v=beta&t=4w64Xmx0_AZ3hIW9CkP6uBjYyy7To1BdinaWD2oaJ74",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Donard Golaj",
      title: "Full-Stack Developer Student",
      img:
        "https://media-exp1.licdn.com/dms/image/D5635AQEMVA0zFCntEQ/profile-framedphoto-shrink_200_200/0/1634289246534?e=1641157200&v=beta&t=5KAt6SYpBK095yJE3AFG_R7ofaQwInG3GFo-nQ_bOtE",
      icon: "assets/social/twitter.png",
      logo:"https://media-exp1.licdn.com/dms/image/C560BAQHr8P7gQ95yCQ/company-logo_200_200/0/1578673850004?e=1649289600&v=beta&t=4w64Xmx0_AZ3hIW9CkP6uBjYyy7To1BdinaWD2oaJ74",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Kossi Fioklou",
      title: "Full-Stack Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQG5Fj6jthO_7g/profile-displayphoto-shrink_200_200/0/1634589222858?e=1646265600&v=beta&t=kvpgjX7AevochTytbrFcD6Ol7HWzb-OzzGl8Q5zP05M",
      icon: "assets/social/linkedin.png",
      logo:"https://media-exp1.licdn.com/dms/image/C560BAQHr8P7gQ95yCQ/company-logo_200_200/0/1578673850004?e=1649289600&v=beta&t=4w64Xmx0_AZ3hIW9CkP6uBjYyy7To1BdinaWD2oaJ74",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.logo} className="left" alt="logo" />
              <img
                className="user"
                src={d.img}
                alt="user"
              />
              <img className="right" src={d.icon} alt="icon" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
