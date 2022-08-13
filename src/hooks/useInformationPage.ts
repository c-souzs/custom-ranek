import React from 'react';

interface InformationPage {
  title: string
  description: string
}

const useInformationPage = ({ title, description }: InformationPage): null => {
  React.useEffect(() => {
    document.title = `Ranek - ${title}`;
    document.querySelector("meta[name='description']")?.setAttribute('content', description || '');
  }, [title, description]);
  return null;
};

export default useInformationPage;
