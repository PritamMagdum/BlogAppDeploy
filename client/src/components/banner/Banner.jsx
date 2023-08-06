
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1510519138101-570d1dca3d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM2NTEyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080) center no-repeat #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 100px;
    color: #FFFFFF;
    line-height: 1;

`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: white;
    // background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>MB</Heading>
            <SubHeading>The Best Blog Website</SubHeading>
        </Image>
    )
}

export default Banner;