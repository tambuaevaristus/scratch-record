import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SubBanner from "../components/SubBanner";


const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },5000)
    },[])
  return (
    <div>
        <SubBanner page="Page not Found"/>    
        <div className="d-flex align-items-center justify-content-center my-5">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
               {/* <Link href="/"> <a className="btn btn-primary">Go Home</a></Link> */}
            </div>
        </div>
    </div>
  );
};

export default NotFound;
