import { CompanyDetail } from '../../(dashboard)/components/CompanyDetail';

export default function AdminCompanyDetailPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Company Details</h1>
      <CompanyDetail />
    </div>
  );
}
