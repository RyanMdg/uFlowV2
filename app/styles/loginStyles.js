import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  LogoContainer: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  rowLogo: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
  },
  Login: {
    borderRadius: 25,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tagLine: {
    color: "#fff",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  Logo: {
    fontSize: 70,
    fontFamily: "LeagueSpartan_700Bold",
    color: "#fff",
  },
  signupTextContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  signupText: {
    fontSize: 14,
    color: "#888",
  },
  signupLink: {
    color: "#5e90b1",
    fontWeight: "bold",
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
    width: "100%",
  },

  eyeIconContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  genderContainer: {
    width: "100%",
    marginVertical: 15,
  },
  genderLabel: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#555",
    marginBottom: 5,
  },
  genderOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  genderText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#555",
    marginLeft: 5,
    marginRight: 20,
  },
});

export default styles;
