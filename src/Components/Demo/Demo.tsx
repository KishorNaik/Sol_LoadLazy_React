import React, { Component, Suspense } from "react";
const LeftComponent=React.lazy(()=> import('../SubComponents/LeftComponent'));
const RightComponent=React.lazy(()=> import('../SubComponents/RightComponent'));


export default class Demo extends Component{

    public render(){
        return (
            <React.Fragment>
                <Suspense fallback={<div><h1>Loading...</h1></div>}>
                    <div className="container mx-auto my-3">
                        <div className="grid grid-cols-1 gap-4 mx md:grid-cols-2">
                            <div className="bg-red-200 flex justify-center items-center text-black">
                                <LeftComponent></LeftComponent>
                            </div>
                            <div className="bg-indigo-400 flex justify-center items-center">
                                <RightComponent></RightComponent>
                            </div>
                        </div>
                    </div>
                    
                </Suspense>
            </React.Fragment>
        )
    }
}