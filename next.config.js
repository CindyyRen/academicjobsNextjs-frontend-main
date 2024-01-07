/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'academicjobs.s3.amazonaws.com',
      'res.cloudinary.com',
      'iloveacademicjobs.com',
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'academicjobs.s3.amazonaws.com',
    //     port: '',
    //     pathname: '/img/*',
    //   },
    // ],
  },
};
module.exports = nextConfig;
