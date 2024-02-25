import Link from "next/link";
import { Button } from "../components/ui";
import "../output.css";

export default function Page() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 250 }}>
      <Button>
        <Link
          style={{ color: "#fff", textDecoration: "none", fontSize: "26px" }}
          href="/downloadData"
        >
          Upload Telegram Data and Filter your messages by Date
        </Link>
      </Button>
      {/* <Link href="/messages">See messages</Link> */}
    </div>
  );
}
