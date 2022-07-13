import React, { useEffect } from "react";



function SlideSHow(props) {
  const ref = React.useRef();
  const ref1 = React.useRef();
  const imgs = props.data;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(props.data);

    if (ref.current !== undefined) {
      ref.current.style.backgroundImage = `url("${imgs[0].img}")`;
      ref1.current.innerText = imgs[0].cap;
    }
  }, []);

  let slideIndex = 0;

  showSlides1();

  function showSlides1() {
    if (ref.current !== undefined) {
      slideIndex++;
      if (slideIndex > imgs.length - 1) {
        slideIndex = 0;
      }
      ref.current.style.backgroundImage = `url("${imgs[slideIndex].img}")`;
      ref1.current.innerText = imgs[slideIndex].cap;
    }

    setTimeout(showSlides1, props.time); // Change image every 2 seconds
  }

  return (
    <div className="slideshow border position-relative" style={{ zIndex: "0" }}>
      <div className="row">
        <div className="col mySlides1" id="slideShow" key={"1"} ref={ref}>
          <span>
            {" "}
            <div className="row">
              <div className="col text-left">
                <h2
                  style={{
                    marginTop: "35%",
                    fontSize: "90px",
                    textTransform: "uppercase",
                    backdropFilter: "brightness(80%)",
                  }}
                  className="mx-3 text-center"
                >
                  <span className="slide-tagline " ref={ref1}>
                    Hello
                  </span>

                  <span
                    style={{
                      color: "#ff5e10",
                    }}
                  >
                    .
                  </span>
                </h2>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SlideSHow;
