import React from 'react';

import Layout from '../components/Layout';
import HeroSection from '../sections/HeroSection';
import ResumeSection from '../sections/home/ResumeSection';

const Index = (): JSX.Element => (
    <Layout>
        <HeroSection />
        <ResumeSection />
    </Layout>
);

export default Index;
