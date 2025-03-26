import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <Banner
        name={"About BitBlog"}
        bannerDescription={
          "BitBlog is a community-driven blog platform where writers can share their ideas, experiences, and expertise with a wider audience. Our mission is to provide a supportive space for writers to showcase their work, connect with like-minded individuals, and grow their audience."
        }
      />

      <div>
        <h2>Our Mission</h2>
        <p>
          We aim to foster a culture of creativity, inclusivity, and learning.
          Our platform is dedicated to:
        </p>
        <ul>
          <li> Empowering writers to share their voices and stories</li>
          <li>
            Building a community that values feedback, support, and
            collaboration
          </li>
          <li> Promoting high-quality content that inspires and educates</li>
        </ul>
      </div>

      <div>
        <h2>What We Offer</h2>
        <p>
          Our platform features a diverse range of articles, stories, and
          resources on various topics. We welcome writers from all backgrounds
          and genres to share their work, connect with our community, and grow
          their online presence.
        </p>
      </div>
      <div>
        <h2>Our Promise</h2>
        <p>
          We promise to provide a supportive environment where writers can
          thrive, learn, and grow. Join our community today and become part of a
          vibrant and inspiring network of writers!
        </p>
      </div>
    </div>
  );
};

export default About;
