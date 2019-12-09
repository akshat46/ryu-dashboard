import { Box, ThemeProvider} from "@chakra-ui/core";

const Card = props => (
    <ThemeProvider>
        <Box
            maxW="sm"
            borderWidth="5px"
            rounded="md"
            overflow="hidden"
            boxShadow="lg"
            bg="grey.200"
            width={400} >
        </Box>
    </ThemeProvider>
);

export default Card;