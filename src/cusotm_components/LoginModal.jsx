import { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input } from "@heroui/react";

function LoginRegisterModal({ isOpen, onOpenChange }) {
  // Signup form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // Modal view state
  const [isSignup, setIsSignup] = useState(false);

  const handleSignup = (e, onClose) => {
    e.preventDefault();
    // TODO: handle signup logic here
    onClose();
  };

  const handleLogin = (e, onClose) => {
    e.preventDefault();
    // TODO: handle login logic here
    onClose();
  };

  const handleOpenChange = (open) => {
    if (!open) setIsSignup(false); // Reset to login on close
    onOpenChange(open);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={handleOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            {!isSignup ? (
              <>
                <ModalHeader className="flex flex-col gap-1 items-center">
                  <span className="text-2xl font-bold text-[#005670]">Welcome Back!</span>
                  <span className="text-sm text-gray-500">Login to your iPharm account</span>
                </ModalHeader>
                <ModalBody>
                  <div className="mb-2 text-center text-gray-600">
                    Enter your email and password to access your account.
                  </div>
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => handleLogin(e, onClose)}
                  >
                    <Input
                      label="Email"
                      type="email"
                      value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                      required
                    />
                    <Input
                      label="Password"
                      type="password"
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      required
                    />
                  </form>
                   <Button color="primary" type="submit" className="w-full mt-5" onPress={() => {}}>
                    Login
                  </Button>
                  <div className="my-4 flex items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="mx-2 text-xs text-gray-400">or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>
                  <Button
                    variant="bordered"
                    className="w-full flex items-center justify-center gap-2"
                    onPress={() => {
                      // TODO: handle Google signup
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block">
                      <g>
                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.6 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 5.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/>
                        <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.2 19.4 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 5.5 29.3 4 24 4c-7.2 0-13.4 4.1-16.7 10.7z"/>
                        <path fill="#FBBC05" d="M24 44c5.6 0 10.4-1.9 14.1-5.1l-6.5-5.3C29.8 36 24 36 24 36c-5.8 0-10.6-2.9-13.7-7.2l-7 5.4C6.6 39.9 14.1 44 24 44z"/>
                        <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-2.7 0-5.2-.9-7.2-2.5l-6.4 6.4C13.9 42.5 18.7 44 24 44c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/>
                      </g>
                    </svg>
                    Continue with Google
                  </Button>
                </ModalBody>
                <ModalFooter className="flex flex-col gap-2">
                  <div className="text-xs text-center text-gray-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-[#005670] underline"
                      onClick={() => setIsSignup(true)}
                    >
                      Register
                    </button>
                  </div>
                </ModalFooter>
              </>
            ) : (
              <>
                <ModalHeader className="flex flex-col gap-1 items-center">
                  <span className="text-2xl font-bold text-[#005670]">Create Account</span>
                  <span className="text-sm text-gray-500">Join iPharm and start your journey</span>
                </ModalHeader>
                <ModalBody>
                  <div className="mb-2 text-center text-gray-600">
                    Fill in your details to create a new account.
                  </div>
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => handleSignup(e, onClose)}
                  >
                    <Input
                      label="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                    <Input
                      label="Password"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </form>
                </ModalBody>
                <ModalFooter className="flex flex-col gap-2">
                  <Button color="primary" type="submit" className="w-full" onPress={() => {}}>
                    Sign Up
                  </Button>
                  <div className="text-xs text-center text-gray-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-[#005670] underline"
                      onClick={() => setIsSignup(false)}
                    >
                      Back to Login
                    </button>
                  </div>
                </ModalFooter>
              </>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default LoginRegisterModal;