# aspire-dashboard-v1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Project Description

```
Aspire Dashboard
- 1 dashboard page named Home, invalid routes redirect to home page.
- Actions supported
    -> Add New Card
    -> Remove Card
    -> Freeze Card
    -> Add Card to Gpay ( Visual only)
- Mobile responsive.
- Redux store used to store card details.
- Add new card modal includes form validation.

```
### Project Assumptions
```
- Only 1 page (Home) needs to be developed for the assignment.
- Initial dashboard state includes pre-existing cards stored in some state management system.
- Remove card just requires a confirmation step with no extra details.
- Project resets to its initial state on refresh as no external data storing service is involved.
```
### Compile for production

```
npm run build
```
