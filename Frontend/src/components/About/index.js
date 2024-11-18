import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <div className='container shadow p-4'>
                <Heading>About Us</Heading>
                <Paragraph>
                Welcome to GROCIO – your ultimate destination for fresh and quality groceries. We are dedicated to delivering a seamless shopping experience, combining convenience, variety, and the finest selection of products to meet all your needs.
                </Paragraph>
                <Paragraph>
                Since our journey began in 2005, GROCIO has been committed to bringing freshness and excellence to your doorstep. With a focus on quality and customer satisfaction, every product we offer is carefully curated to ensure it meets the highest standards.
                </Paragraph>
                <Paragraph>
                Whether you’re stocking up on daily essentials, searching for premium ingredients for your recipes, or planning a special occasion, GROCIO has got you covered. Discover the joy of effortless grocery shopping with GROCIO – where freshness meets convenience.
                </Paragraph>
            </div>
        </AboutContainer>
    );
};

export default About;
