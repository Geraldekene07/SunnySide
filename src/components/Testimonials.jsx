import React from "react";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

// creating an array of objects where each object represents the data for each testimonial and then i mapped through the array to render each testimonial
const testimonials = [
  {
    image: emily,
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    role: "Marketing Director",
  },
  {
    image: thomas,
    content:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    role: "Chief Operating Officer",
  },
  {
    image: jennie,
    content:
      "  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    role: "Business Owner",
  },

  // Add more testimonial objects here as needed
];

const Testimonials = () => {
  return (
    <div className="">
      <h2 className="firsttest text-center">CLIENT TESTIMONIALS</h2>
      <div className="maintest">
        {testimonials.map((testimonial, index) => (
          <div className="testimonials" key={index}>
            <img className="testimg mb-5" src={testimonial.image} alt="" />
            <p className="testcont">{testimonial.content}</p>
            <p className="testname text-center">{testimonial.name}</p>
            <p className="testrole text-center">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
