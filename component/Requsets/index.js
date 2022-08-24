const caseStudies = () => {
  const request = fetch(
    'https://api.dev.boka.co/content-management/case-studies',
  ).then((response) => response.json())
  return request
}
const popularCategories = () => {
  //
  const request = fetch(
    'https://api.dev.boka.co/business-management/lookups/business-categories?limit=5&orderBy=popularity',
  ).then((response) => response.json())
  return request
}

export { caseStudies, popularCategories }
