
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Magdum Blogs</Typography>
                <Text variant="h5">Welcome to Magdum Blog, your go-to destination for insightful and engaging content on a wide range of topics! Our mission is to provide our readers with enriching and thought-provoking articles that cater to diverse interests and passions. Whether you're a curious mind, a lifelong learner, or just someone looking for a good read, we have something for everyone.
                </Text>
                <Text variant="h5">Our commitment to quality and authenticity is unwavering. You can trust that the information presented on Magdum Blog is accurate, reliable, and unbiased. We strive to present multiple viewpoints and support our claims with credible sources, empowering you to form well-informed opinions.
                </Text>
                <Text variant="h5">Thank you for being a part of our growing community. We value your feedback and suggestions, so feel free to reach out to us. Together, let's embark on a quest for knowledge and make every day a step towards enlightenment. Happy reading.
                </Text>
                <Text variant="h5">
                    If you have any query or doubts then you can directly message on my instagram profile 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/pritam_magdum_72_12/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                     or if you want to build the websites for your company or organization then you can directly contact on email 
                        <Link href="mailto:pritammagdum24@gmail.com?Subject=Regarding the wesite building" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;