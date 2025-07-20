import Head from "next/head";
import RecurrenceOptions from "../components/RecurrenceOptions";
import { RecurrenceProvider }  from "../context/RecurrenceContext";
import DateRangePicker from "../components/DateRangePicker";
import CalendarPreview from "../components/CalendarPreview";
import CustomizationOptions from "@/components/CustomizationOptions";

export default function Home() {
  return (
    <RecurrenceProvider>
      <Head>
        <title>Recurring Date Picker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">Recurring Date Picker</h2>
        <RecurrenceOptions />
        <CustomizationOptions />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </RecurrenceProvider>
  );
} 