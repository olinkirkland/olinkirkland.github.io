export default function downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/files/resume-en.pdf';
    link.download = 'olin-kirkland-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
