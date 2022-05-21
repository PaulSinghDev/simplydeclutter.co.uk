import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

// Wrap our tests in a component which adds our providers
const TestWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

// Use the custom render function to add our wrapper to the tested component
const customRender = (ui: any, options?: any) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

/**
 * Helper function to return an object with all the meta elements in the baseElement
 *
 * @param baseElement HTML element which is queried for our meta elements
 * @returns { object } Key:value object which has either the element or null
 */
const getAllMeta = (
  baseElement: Element
): { [key: string]: Element | null } => {
  const title = baseElement.querySelector("title");
  const description = baseElement.querySelector('[name="description"]');
  const icon = baseElement.querySelector('link[rel="icon"]');
  const robots = baseElement.querySelector('[name="robots"]');
  const ogTitle = baseElement.querySelector('[property="og:title"]');
  const ogDescription = baseElement.querySelector(
    '[property="og:description"]'
  );
  const ogImage = baseElement.querySelector('[property="og:image"]');
  const ogType = baseElement.querySelector('[property="og:type"]');
  const ogUrl = baseElement.querySelector('[property="og:url"]');
  const ogSiteName = baseElement.querySelector('[property="og:site_name"]');
  const twitterTitle = baseElement.querySelector('[name="twitter:title"]');
  const twitterDescription = baseElement.querySelector(
    '[name="twitter:description"]'
  );
  const twitterImage = baseElement.querySelector('[name="twitter:image"]');
  const twitterSite = baseElement.querySelector('[name="twitter:site"]');
  const twitterCreator = baseElement.querySelector('[name="twitter:creator"]');
  const twitterCard = baseElement.querySelector('[name="twitter:card"]');
  return {
    title,
    description,
    icon,
    robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    ogUrl,
    ogSiteName,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    twitterCreator,
    twitterCard,
  };
};

export * from "@testing-library/react";
export { customRender as render, getAllMeta };
