import { HTMLAttributes } from "react";
import styled from "styled-components";

interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {}

const Testimonials: React.FC<TestimonialsProps> = (props) => (
  <StyledTestimonials {...props} />
);

const StyledTestimonials = styled.div``;

export { Testimonials };
