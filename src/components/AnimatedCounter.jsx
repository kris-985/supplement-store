import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

export const AnimatedCounter = ({ end }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && <CountUp start={0} end={end} duration={10.5} />}
    </div>
  );
};

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
};
