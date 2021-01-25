import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const HomeComponent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'home section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'home-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="home-content">
            <h2 style={{ marginTop: -45 }} className="mt-0 mb-0 reveal-from-bottom" data-reveal-delay="200">
              Tu Compra en <span className="text-color-primary">Flor Amarillo</span>
            </h2>
            <div className="container-xs">
              <p style={{ fontSize: 18 }} className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Somos una herramienta de impulso y difusión del comercio local, con la finalidad de proporcionarte la oportunidad de proyectar tu marca y productos en Flor Amarillo
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Formar parte
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    Contáctanos
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="home-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <Image
              style={{ marginTop: -50 }}
              className="has-shadow"
              src={require('./../../assets/images/flower.svg')}
              alt="Home"
              width={550}
              height={200} />
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

HomeComponent.propTypes = propTypes;
HomeComponent.defaultProps = defaultProps;

export default HomeComponent;