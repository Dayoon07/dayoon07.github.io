import React from "react";

const Svg: React.FC<{ d: string }> = ({ d }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
);

export const WorkIcon = () => <Svg d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm4 4V4h-4v2h4z" />;
export const EducationIcon = () => <Svg d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />;
export const CertificateIcon = () => <Svg d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v4l-3-2-3 2v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h12V7H6zm0 4v2h8v-2H6z" />;
export const AwardIcon = () => <Svg d="M19 5h-2V3H7v2H5a2 2 0 0 0-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7a2 2 0 0 0-2-2zM5 8V7h2v3.82A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 2.82V7h2v1z" />;
export const ClubIcon = () => <Svg d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05A4.22 4.22 0 0 1 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />;
