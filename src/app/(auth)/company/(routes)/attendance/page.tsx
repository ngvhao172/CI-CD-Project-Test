import { AttendanceStatistics } from "../attendance/components/Attendance";

export default function AttendancePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Attendance Overview</h1>
            <AttendanceStatistics />
        </div>
    )
}

