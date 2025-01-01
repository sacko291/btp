"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { Backbutton } from "@/components/auth/back-button";

type CardwraperProps = {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string; 
    backButtonHref: string;
    showSocial?: boolean;
}

const Cardwraper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocial}: CardwraperProps) => {
  return (
    <Card className="w-[400px] shadow-md ">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial &&  
        <CardFooter>
            <Social/>
        </CardFooter>}
        
        <CardFooter>
            <Backbutton 
                label={backButtonLabel}
                href={backButtonHref}
            />
        </CardFooter>
    </Card>
  )
}

export default Cardwraper
