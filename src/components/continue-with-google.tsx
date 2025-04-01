"use client"

// import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";
// import { useAuth } from "@/context/auth";

// export default function ContinueWithGoogleButton() {
//   const auth = useAuth();
//   const router = useRouter();

//   return (
//     <Button
//       variant="outline"
//       onClick={async () => {
//         try {
//           await auth?.loginWithGoogle();
//           router.refresh();
//         } catch (e) {}
//       }}
//       className="w-full"
//     >
//       Continue with Google
//     </Button>
//   );
// }

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { Button } from "./ui/button";
import { auth } from "@/firebase/client"
import { useAuth } from "@/context/auth";
export default function ContinueWithGoogleButton(){
    const auth = useAuth();
    return (
        <Button onClick={() =>{
           auth?.loginWithGoogle();
        }}>
        Continue with Google 
        </Button>
    )
}