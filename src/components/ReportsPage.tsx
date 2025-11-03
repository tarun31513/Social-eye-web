import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FileText, Download, Mail, Calendar, Plus } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      name: 'Weekly Performance Report',
      period: 'Oct 28 - Nov 3, 2024',
      generated: 'Nov 3, 2024',
      type: 'Weekly',
      status: 'ready',
    },
    {
      id: 2,
      name: 'Monthly Analytics Summary',
      period: 'October 2024',
      generated: 'Nov 1, 2024',
      type: 'Monthly',
      status: 'ready',
    },
    {
      id: 3,
      name: 'Competitor Analysis Report',
      period: 'Q4 2024',
      generated: 'Oct 15, 2024',
      type: 'Quarterly',
      status: 'ready',
    },
    {
      id: 4,
      name: 'Sentiment Trends Report',
      period: 'Oct 1 - Oct 31, 2024',
      generated: 'Oct 31, 2024',
      type: 'Monthly',
      status: 'ready',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Reports</h1>
          <p className="text-muted-foreground">Generate and download analytics reports</p>
        </div>
        <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
          <Plus className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Report Generator */}
      <Card className="p-6">
        <h3 className="mb-6">Create Custom Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2">Report Type</label>
            <Select defaultValue="weekly">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily Summary</SelectItem>
                <SelectItem value="weekly">Weekly Performance</SelectItem>
                <SelectItem value="monthly">Monthly Analytics</SelectItem>
                <SelectItem value="quarterly">Quarterly Review</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-2">Format</label>
            <Select defaultValue="pdf">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Document</SelectItem>
                <SelectItem value="csv">CSV Spreadsheet</SelectItem>
                <SelectItem value="excel">Excel Workbook</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Recurring
          </Button>
        </div>
      </Card>

      {/* Report Metrics Preview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <p className="text-muted-foreground mb-2">Total Mentions</p>
          <p style={{ fontSize: '28px', fontWeight: '700' }}>3,247</p>
          <p className="text-sm text-green-600 mt-1">+12.5% vs last period</p>
        </Card>

        <Card className="p-6">
          <p className="text-muted-foreground mb-2">Avg. Sentiment</p>
          <p style={{ fontSize: '28px', fontWeight: '700' }}>72%</p>
          <p className="text-sm text-green-600 mt-1">+5.2% vs last period</p>
        </Card>

        <Card className="p-6">
          <p className="text-muted-foreground mb-2">Engagement Rate</p>
          <p style={{ fontSize: '28px', fontWeight: '700' }}>8.4%</p>
          <p className="text-sm text-green-600 mt-1">+1.8% vs last period</p>
        </Card>

        <Card className="p-6">
          <p className="text-muted-foreground mb-2">Top Platform</p>
          <p style={{ fontSize: '28px', fontWeight: '700' }}>Twitter</p>
          <p className="text-sm text-muted-foreground mt-1">1,250 mentions</p>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="p-6">
        <h3 className="mb-6">Recent Reports</h3>
        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0099ff]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#0099ff]" />
                </div>
                <div>
                  <p>{report.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-sm text-muted-foreground">{report.period}</p>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Generated on {report.generated}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Scheduled Reports */}
      <Card className="p-6">
        <h3 className="mb-6">Scheduled Reports</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p>Weekly Performance Report</p>
              <p className="text-sm text-muted-foreground mt-1">
                Every Monday at 9:00 AM • Email to john@company.com
              </p>
            </div>
            <Button variant="outline" size="sm">Edit</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p>Monthly Analytics Summary</p>
              <p className="text-sm text-muted-foreground mt-1">
                1st of each month at 8:00 AM • Email to team@company.com
              </p>
            </div>
            <Button variant="outline" size="sm">Edit</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
