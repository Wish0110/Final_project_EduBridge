"use client";

import { useState } from "react";
import{
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Intro() {
    const position = { lat: 5354, lng: 10 };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <div style={{height: "100vh"}}>
                <Map zoom={9} center={position}></Map>
            </div>
        </APIProvider>

    );
}