import './works.scss';

export default function Works() {
  return (
    <div className="works" id="works">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/social/coding.png" alt="work-one" />
                  <h2>Title</h2>
                  <p>Fafaga afafa bababaa ahahaa nannananan anananana
                    agaagaga ggdyumamamama mamamaam ammamaamm anbnnnn
                  </p>
                  <span>Project</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
        src="assets/icons/next.png"
        className="arrow left"
        alt="" />
      <img
        src="assets/icons/next.png"
        className="arrow right"
        alt="" />
    </div>
  );
}
