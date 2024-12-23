import { Component } from "react";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isPlaying: true,
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startSlider = () => {
    this.timer = setInterval(this.nextSlide, 1000);
  };

  stopSlider = () => {
    clearInterval(this.timer);
    this.setState({ isPlaying: false });
  };

  toggleSlider = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.stopSlider();
    } else {
      this.startSlider();
      this.setState({ isPlaying: true });
    }
  };

  nextSlide = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  prevSlide = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex, isPlaying } = this.state;

    return (
      <section className="xl:padding-l  wide:padding-r paddind-b">
        <div className="w-full my-10 py-10 flex items-center flex-col gap-5 justify-center">
          <div className="w-[300px] h-[300px]">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </div>
          <div className="flex gap-3 w-full justify-between my-10">
            <button
              className="py-3 px-5 flex-grow bg-blue-600 text-white"
              onClick={this.prevSlide}
            >
              Prev
            </button>
            <button
              className="py-3 px-5 flex-grow bg-blue-600 text-white"
              onClick={this.nextSlide}
            >
              Next
            </button>
            <button
              className={` ${
                isPlaying === true ? "bg-red-600" : "bg-green-600"
              } py-3 px-5 flex-grow  text-white`}
              onClick={this.toggleSlider}
            >
              {isPlaying ? "Stop" : "Play"}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageSlider;
