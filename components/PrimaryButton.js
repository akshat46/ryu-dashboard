import { PseudoBox, ThemeProvider } from "@chakra-ui/core";

const PrimaryButton = props => (
    <ThemeProvider>
    <PseudoBox
        as="button"
        borderWidth="0px"
        px="8px"
        padding="20px"
        rounded="10px"
        fontSize="md"
        cursor="pointer"
        fontWeight="semibold"
        bg={props.bg}
        boxShadow="md"
        boxSizing="border-box"
        color="white"
        margin="0 20px 0 20px"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        transform= {"scale("+props.scale+")"}
        _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg"
        }}
        _focus={{
            boxShadow: "lg"
        }}
    >
        {props.children}
    </PseudoBox>
    </ThemeProvider>
);

export default PrimaryButton;