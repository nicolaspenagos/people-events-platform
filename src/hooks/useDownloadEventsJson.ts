import { useCallback } from "react";

const useDownloadEventsJson = (events: any[]) => {
  // The download function is now only called on demand
  const downloadJson = useCallback((data: any, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  // This function is called to trigger the download
  const handleDownload = () => {
    downloadJson(events, "events_data.json");
  };

  return handleDownload;
};

export default useDownloadEventsJson;
